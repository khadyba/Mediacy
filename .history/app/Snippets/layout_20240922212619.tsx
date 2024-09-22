interface LandingLayoutProps {
    children: React.ReactNode;
  }

const LandingS = ({ children }: LandingLayoutProps) => {
    return(
                  <div>
                    {children}
                  </div>
    )
}
export default LandingLayout