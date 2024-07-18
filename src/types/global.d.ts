// import {}

declare global {
    type ReactNode =
      | React.ReactElement<unknown>
      | FunctionComponent<unknown>
      | React.ComponentClass<unknown>
      | null;

      interface RootLayoutProps{
        children:React.ReactNode;
      }
      interface MenuItem {
        label: string;
        items: { text: string; url: string }[];
      }
      interface CustomButtonProps {
        boxShadowColor: string;
        buttonText: string;
        boxShadow?: string;
        onClick?: () => void;
        backgroundColor?: string;
        border?: string; // Added border prop
      }
      interface InfoBoxProps {
        boxShadowColor: string;
        Text: string;
        Text2?: string;
        boxShadow?: string;
        backgroundColor?: string;
        border?: string; // Added border prop
      }
      interface HeadingWithLineProps {
        text: string;
        textColor: string;
      }
}

export {}