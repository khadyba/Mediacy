interface AboutProps {
    children: React.ReactNode;
  }

const LandingSnippet = ({ children }: AboutProps) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default LandingSnippet