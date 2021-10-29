import { render } from 'preact';
import { PageEditor } from './page-editor';
import componentList from './page-editor-components';
import "./app.scss";
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

render(App(), document.body)
