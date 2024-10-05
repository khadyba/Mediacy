interface S {
    children: React.ReactNode;
  }

const SnippetShow = ({ children }: S) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default SnippetShow