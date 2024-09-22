interface LandingLayoutProps {
    children: React.ReactNode;
  }

const LandingSni = ({ children }: LandingLayoutProps) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default LandingLayout