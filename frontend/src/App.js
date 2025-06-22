import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>VectorShift Task</h1>
      </header>
      <PipelineToolbar />
      <main className="app-main">
        <PipelineUI />
      </main>
      <footer className="app-footer">
        <SubmitButton />
      </footer>
    </div>
  );
}

export default App;
