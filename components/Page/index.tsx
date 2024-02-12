import PageTemplate from "../PageTemplate";
import Header from "../Header";
import Footer from "../Footer";



interface PageProps {
  children: React.ReactNode | React.ReactNode[];
  header?: boolean | undefined;
  footer?: boolean | undefined;
}

const Page: React.FC<PageProps> = ({
  children,
  header,
  footer
}) => {
  return <>
  {/* if you write header in Page props, than it will dissappear */}
    {header === undefined && <Header />}

    <PageTemplate>
      {children}
    </PageTemplate>

    {footer === undefined && <Footer />}
  </>
}

export default Page;