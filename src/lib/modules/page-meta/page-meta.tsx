import React, { useState } from "react";

export const PageMeta = ({pageMeta, updatePageMetaState}) => {

  const onChange = (e, key) => {
    updatePageMetaState(key, e.target.value);
  };

  return (
    <div className='page-editor__drawer-contents'>
      <div className='pe-drawer-contents__option'>
          <label>Page Name:<br />
              <input name='name' onChange={(e) => onChange(e, "name")} value={pageMeta.name} />
          </label>
      </div>
      <div className='pe-drawer-contents__option'>
          <label>Page Status (drafts are only visible to admins):
                  <select name="status" className="base-form__select" onChange={(e) => onChange(e, "status")} value={pageMeta.status}>
                          <option value="draft">Draft</option>
                          <option value="publish">Publish</option>
                  </select>
          </label>
      </div>
      <div className='pe-drawer-contents__option'>
          <label>Page Url:<br />
              <input name='slug' onChange={(e) => onChange(e, "slug")} value={pageMeta.slug} />
              <div style={{fontSize:"0.8em", fontColor:"#dddddd", paddingTop:4}}>Set to "/" to make this homepage</div>
          </label>
      </div>
    </div>
  );
};
