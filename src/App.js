import './sass/components/master.scss';
import { PageEditor } from './page-editor';

function App() {
  return (
    <body>
      <div className="container">
        <main class="office-content">
          <section class="common-office-section">
            <div id="page-editor">
              <PageEditor />
            </div>
          </section>
        </main>
      </div>
    </body>
  );
}

export default App;
