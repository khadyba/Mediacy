interface SnippetShowProps {
    children: React.ReactNode;
  }

const SnippetShow = ({ children }: SnippetShowProps) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default SnippetShow