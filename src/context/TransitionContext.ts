
import { createContext } from 'react';

export interface TransitionContextValue {
    requestTransition: (to: string) => void;
}

export const TransitionContext = createContext<TransitionContextValue>({
    requestTransition: () => { },
});
