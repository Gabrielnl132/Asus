import { CanDeactivateFn } from '@angular/router';
import { AcercadeComponent } from '../pages/acercade/acercade.component';
export const warningsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const currentComponent = component as AcercadeComponent;

  
  return true;
};
