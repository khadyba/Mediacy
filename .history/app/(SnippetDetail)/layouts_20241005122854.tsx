interface LandingSnippetProps {
    children: React.ReactNode;
  }

const Snippet = ({ children }: LandingSnippetProps) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default LandingSnippet