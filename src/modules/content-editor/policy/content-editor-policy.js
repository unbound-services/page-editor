import React from 'react';
import EditorContext from '../content-editor-editor-context';
import SelectInput from '../input-slot/select-input/content-editor-input-slot-select-input';
import superagent from 'superagent';


let policies = null;
const refreshPolicies = (then)=>{
    superagent.get('/policies/all-policies')
        .then(res => {
            policies = res.body.policies;
            console.log(res)
            then();
        })
}

class Policy extends React.Component {

    constructor(props){
        super(props)
        this.state ={loading:false}
    }

    componentDidMount(){
        
        if(policies == null){
            if(!this.state.loading) {
                refreshPolicies(()=>this.setState({loading: false}))
            }
        }
    }

    render(){

        const { editing, previewing, policyId } = this.props;

        if(this.state.loading || !policies) {
            return <div style={{paddingTop:40}}>Loading Policies...</div>
        }
        let policyNames = [];
        let policyIds = policies.map( policy => {
            policyNames.push(policy.name)
            return policy.id
        })
        // get ahold of the policy for our preview
        const policy = getPolicyById(policyId)
        let policyContent ="";
        if(policy) {
            policyContent = policy.policy;
        }

        if(editing) {
            return <div style={{paddingTop:40}}>
            Policy:
            <SelectInput sectionName="policyId" 
                options={policyIds}
                current={policyId}
                optionLabels={policyNames}></SelectInput>{policyContent}</div>
        } else if(previewing) {
            const policy = getPolicyById(policyId)
            return <p>{policy.policy}</p>
        } else {
            if(!policies || !policies.length) return null;
            let usePolicy = policies[0].id;
            if(policyId) usePolicy = policyId;
            return <p>{`@@@POLICY|${usePolicy}@@@`}</p>
        }
    }
}

Policy.editorControlsData={verticalOffset: 5}

const getPolicyById = id => {
    for(let i=0;i<policies.length;i++){
        if(policies[i].id == id) return policies[i];
    }
    return policies[0];
}


export default Policy;