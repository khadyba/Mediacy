interface Sni {
    children: React.ReactNode;
  }

const SnippetShow = ({ children }: Sni) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default SnippetShow