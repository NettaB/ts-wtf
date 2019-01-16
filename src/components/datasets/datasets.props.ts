export interface OwnProps {
    id: number
}

export interface DispatchProps {
    fetchDatasets: () => void;
}

export type Props = OwnProps & DispatchProps ;