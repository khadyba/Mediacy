interface LandingSnippetProps {
    children: React.ReactNode;
  }

const LandingSnippet = ({ children }: LandingSnippetProps) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default LandingSnippet