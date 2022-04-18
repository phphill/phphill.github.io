import {ComingSoon} from '../components/animations/ComingSoon';
import {SCTemplates} from './SCTemplates';
export function Templates() {
  return (
    <SCTemplates id="templates">
      <h3>Templates</h3>
      <div className="animation">
        <ComingSoon />
      </div>
    </SCTemplates>
  );
}
