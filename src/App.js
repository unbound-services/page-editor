import './sass/components/master.scss';
import { PageEditor } from './page-editor';
import componentList from './page-editor-components';

function App() {
  return (
    <body>
      <div className="container">
        <main class="office-content">
          <section class="common-office-section">
            <div id="page-editor">
              <PageEditor componentList={componentList} />
            </div>
          </section>
        </main>
      </div>
    </body>
  );
}

export default App;
