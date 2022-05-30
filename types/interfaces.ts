export interface ContainerProps {
    border?: boolean;
    children: React.ReactNode;
}

export interface ButtonProps {
    color?: string;
    fixedWidth?: boolean;
    name?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export interface SvgIconProps {
    src: string;
    width?: string;
    height?: string;
    className?: string;
}

export interface InputProps {
    name: string;
    placeholder: string;
    t: any;
    type?: string;
    value?: string;
    onChange: (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}

export interface validateProps {
    name: string;
    message: string;
    email: string;
}

export interface BorderedDivProps {
    className?: string;
    style?: object;
    children: React.ReactNode;
}

export interface ContentBlockProps {
    icon: string;
    title: string;
    content: string;
    section?: any;
    button?: any;
    t?: any;
    id: string;
    type?: string;
    svgIcon?: any
}

export interface ApiResponse {
    hasError: boolean;
    message?: string;
    data?: any ;
    responseCode?: number;
}
