interface LandingLayoutProps {
    children: React.ReactNode;
  }

const LandingSnippet = ({ children }: LandingLayoutProps) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default Landing