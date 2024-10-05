interface SnippetSwo {
    children: React.ReactNode;
  }

const SnippetShow = ({ children }: SnippetSwo) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default SnippetShow