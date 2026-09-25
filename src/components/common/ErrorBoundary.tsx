import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('MORVIX UI error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="section">
          <div className="container">
            <div className="empty-state">
              <div className="empty-state__content">
                <span className="eyebrow">System UI</span>
                <h1>Something interrupted this view.</h1>
                <p>Reload the page to restore the interface. If the problem continues, check the browser console during development.</p>
              </div>
            </div>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
