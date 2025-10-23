declare module 'react' {
    export function useState<S>(initialState: S | (() => S)): [S, (newState: S | ((prevState: S) => S)) => void];
    export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
    export function useRef<T>(initialValue: T): { current: T };
    export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
    export function useMemo<T>(factory: () => T, deps: any[]): T;

    export type ReactNode = any;
    export type ReactElement = any;
    export type ComponentType<P = {}> = any;
    export type FunctionComponent<P = {}> = (props: P) => ReactNode;
    export type FC<P = {}> = FunctionComponent<P>;

    export class Component<P = {}, S = {}> {
        constructor(props: P);
        props: P;
        state: S;
        render(): ReactNode;
    }

    export const StrictMode: ComponentType<{ children?: ReactNode }>;

    export interface Context<T> {
        Provider: ComponentType<{ value: T; children?: ReactNode }>;
        Consumer: ComponentType<{ children: (value: T) => ReactNode }>;
    }

    const React: {
        StrictMode: ComponentType<{ children?: ReactNode }>;
        useState: typeof useState;
        useEffect: typeof useEffect;
        useRef: typeof useRef;
        useCallback: typeof useCallback;
        useMemo: typeof useMemo;
        Component: typeof Component;
    };

    export default React;
}

declare module 'react-dom/client' {
    import { ReactNode } from 'react';

    export interface Root {
        render(children: ReactNode): void;
        unmount(): void;
    }

    export function createRoot(container: Element | DocumentFragment): Root;
}
