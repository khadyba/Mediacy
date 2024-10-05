interface LandingSnippetProps {
    children: React.ReactNode;
  }

const SnippetS = ({ children }: LandingSnippetProps) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default LandingSnippet