import './sass/components/master.scss';
import { PageEditor } from './page-editor';
import componentList from './page-editor-components';

function App() {
  return (
    <div className="container">
      <main className="office-content">
        <section className="common-office-section">
          <div id="page-editor">
            <PageEditor componentList={componentList} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
