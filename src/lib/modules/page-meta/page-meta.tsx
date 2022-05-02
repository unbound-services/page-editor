import React, { useState } from "react";

export const PageMeta = () => {
  const [pageMeta, setPageMeta] = useState({
    name: "",
    status: "",
    slug: "",
    title: "",
    meta: "",
  });

  const onChange = (e, key) => {
    setPageMeta({
      ...pageMeta,
      [key]: e.target.value,
    });
  };

  return (
    <div className='page-editor__drawer-contents'>
      <div className='pe-drawer-contents__option'>
          <label>Page Name:<br />
              <input name='name' onChange={(e) => onChange(e, "name")} value={pageMeta.name} />
              <div style={{fontSize:"0.8em", fontColor:"#dddddd", paddingTop:4}}>Page Name will default to be the title, but you can set the title separately bellow if the name is needed for internal purposes </div>
          </label>
      </div>
      <div className='pe-drawer-contents__option'>
          <label>Page Status (drafts are only visible to admins):
                  <select name="status" className="base-form__select" onChange={(e) => onChange(e, "status")} value={pageMeta.status}>
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                  </select>
          </label>
      </div>
      <div className='pe-drawer-contents__option'>
          <label>Page Url (e.g. meet-the-family ):<br />
              <input name='slug' onChange={(e) => onChange(e, "slug")} value={pageMeta.slug} />
              <div style={{fontSize:"0.8em", fontColor:"#dddddd", paddingTop:4}}>Set to "/" to make this homepage</div>
          </label>
      </div>
      {/* Page Meta by request of the client */}
      <div className='pe-drawer-contents__option'>
          <label>Page Title:<br />
              <input name='title' onChange={(e) => onChange(e, "title")} value={pageMeta.title} />
              <div style={{fontSize:"0.8em", fontColor:"#dddddd", paddingTop:4}}>The Page name will be used if this is left blank </div>
          </label>
      </div>
      <div className='pe-drawer-contents__option'>
          <label>Page Header Meta Tags (PROCEED AT YOUR OWN RISK):<br />
              <textarea style={{width:"100%",minHeight:200}} name='header-meta' onChange={(e) => onChange(e, "meta")} value={pageMeta.meta} />
              <div style={{fontSize:"0.8em", fontColor:"#dddddd", paddingTop:4}}>By default the system provides a viewport, ritle, charset, and csrf-token meta tags.  Anything in the textbox above will appear in the &lt;Head&gt;</div>
          </label>
      </div>
    </div>
  );
};
