import RadialGradientBackgroundComponent from '@/ui/components/radial-gradient-bg.component';
import LogoMobileComponent from '@/ui/components/svg/logo-components/logo-mobile.component';
import LogoFullscreenComponent from '@/ui/components/svg/logo-components/logo-fullscreen.component';
import HomeContent from './home-content';

export default function HomeScreen() {
  return (
    <>
      <RadialGradientBackgroundComponent />
      <LogoMobileComponent />
      <LogoFullscreenComponent />
      <main className={'fixed w-full h-full'}>
        <HomeContent />
      </main>
    </>
  );
}
