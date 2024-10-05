interface Snippet {
    children: React.ReactNode;
  }

const SnippetShow = ({ children }: Snippet) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default SnippetShow