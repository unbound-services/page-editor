import "./page-meta.scss";

export const PageMeta = ({ pageMeta, updatePageMetaState }) => {
  const onChange = (e, key) => {
    updatePageMetaState(key, e.target.value);
  };

  return (
    <div className="drawer-contents">
      <div className="drawer-contents__option">
        <label>
          Page Name:
          <br />
          <input
            className="drawer-contents__input"
            name="name"
            onChange={(e) => onChange(e, "name")}
            value={pageMeta.name}
          />
        </label>
      </div>
      <div className="drawer-contents__option">
        <label>
          Page Status (drafts are only visible to admins):
          <select
            name="status"
            className="base-form__select drawer-contents__input"
            onChange={(e) => onChange(e, "status")}
            value={pageMeta.status}>
            <option value="draft">Draft</option>
            <option value="publish">Publish</option>
          </select>
        </label>
      </div>
      <div className="drawer-contents__option">
        <label>
          Page Url:
          <br />
          <input
            className="drawer-contents__input"
            name="slug"
            onChange={(e) => onChange(e, "slug")}
            value={pageMeta.slug}
          />
          <div
            style={{ fontSize: "0.8em", fontColor: "#dddddd", paddingTop: 4 }}>
            Set to "/" to make this homepage
          </div>
        </label>
      </div>
    </div>
  );
};
