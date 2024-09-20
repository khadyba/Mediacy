import { ProfileForm } from "../_components/Form";
interface LandingLayoutProps {
    children: React.ReactNode;
  }

const LandingLayout = ({ children }: LandingLayoutProps) => {
    return(
                  <div>
                    <ProfileForm />
                    {children}
                  </div>
    )
}
export default LandingLayout