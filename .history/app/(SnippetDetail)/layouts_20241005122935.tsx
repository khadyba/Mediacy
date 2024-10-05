interface SnippetShow {
    children: React.ReactNode;
  }

const SnippetShow = ({ children }: SnippetShow) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default SnippetShow