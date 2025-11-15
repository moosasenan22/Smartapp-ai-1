import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Component {
  id: string;
  type: string;
  name: string;
  props: any;
  children?: Component[];
}

interface BuilderState {
  components: Component[];
  selectedComponent: Component | null;
  isDragging: boolean;
}

type BuilderAction = 
  | { type: 'ADD_COMPONENT'; payload: Component }
  | { type: 'SELECT_COMPONENT'; payload: Component | null }
  | { type: 'UPDATE_COMPONENT'; payload: { id: string; props: any } }
  | { type: 'SET_DRAGGING'; payload: boolean }
  | { type: 'CLEAR_CANVAS' };

const initialState: BuilderState = {
  components: [],
  selectedComponent: null,
  isDragging: false,
};

const builderReducer = (state: BuilderState, action: BuilderAction): BuilderState => {
  switch (action.type) {
    case 'ADD_COMPONENT':
      return {
        ...state,
        components: [...state.components, action.payload],
      };
    case 'SELECT_COMPONENT':
      return {
        ...state,
        selectedComponent: action.payload,
      };
    case 'UPDATE_COMPONENT':
      return {
        ...state,
        components: state.components.map(comp =>
          comp.id === action.payload.id 
            ? { ...comp, props: { ...comp.props, ...action.payload.props } }
            : comp
        ),
      };
    case 'SET_DRAGGING':
      return {
        ...state,
        isDragging: action.payload,
      };
    case 'CLEAR_CANVAS':
      return {
        ...state,
        components: [],
        selectedComponent: null,
      };
    default:
      return state;
  }
};

const BuilderContext = createContext<{
  state: BuilderState;
  dispatch: React.Dispatch<BuilderAction>;
} | null>(null);

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(builderReducer, initialState);

  return (
    <BuilderContext.Provider value={{ state, dispatch }}>
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  return context;
};
