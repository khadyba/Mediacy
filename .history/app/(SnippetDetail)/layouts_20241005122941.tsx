interface SnippetShowP {
    children: React.ReactNode;
  }

const SnippetShow = ({ children }: SnippetShowP) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default SnippetShow