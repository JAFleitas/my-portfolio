import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { DESCRIPTION } from "../../../helpers/constants";
import { Navbar, SideMenu } from "../../ui";

import { Container, ChildrenContainer } from "./styles";

const origin = typeof window === "undefined" ? " " : window.location.origin;

export const InitialLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio - Gonzalo Fleitas</title>

        <meta name="description" content={DESCRIPTION} />
        <meta name="og:title" content="Portfolio - Gonzalo Fleitas" />
        <meta name="og:description" content={DESCRIPTION} />
        <meta name="og:image" content={`${origin}/assets/linkedinbanner.jpg`} />
        {/* <meta
          name="voyager-web/config/environment"
          content="%7B%22modulePrefix%22%3A%22voyager-web%22%2C%22environment%22%3A%22production%22%2C%22aide%22%3A%7B%22isIsolatedBuild%22%3Afalse%7D%2C%22ember-finite-scroll%22%3A%7B%22assertMockDidIntersectEnabled%22%3Afalse%7D%2C%22ember-restli-graphql%22%3A%7B%22strictErrorHandling%22%3Atrue%7D%2C%22client-sensor-web%22%3A%7B%22mpName%22%3A%22voyager-web%22%7D%2C%22ember-media-player%22%3A%7B%22lazyLoad%22%3Atrue%7D%2C%22ember-fetch%22%3A%7B%22preferNative%22%3Atrue%7D%2C%22image-editor%22%3A%7B%22lazyLoad%22%3Atrue%7D%2C%22i18n%22%3A%7B%22disableMissingPlaceholderCheck%22%3Atrue%7D%2C%22rootURL%22%3A%22%2F%22%2C%22routerRootURL%22%3A%22%2F%22%2C%22deviceFormFactor%22%3A%22DESKTOP%22%2C%22locationType%22%3A%22voyager-location%22%2C%22namespace%22%3A%22voyager%2Fapi%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22_APPLICATION_TEMPLATE_WRAPPER%22%3Afalse%2C%22_DEFAULT_ASYNC_OBSERVERS%22%3Atrue%2C%22_JQUERY_INTEGRATION%22%3Afalse%2C%22_TEMPLATE_ONLY_GLIMMER_COMPONENTS%22%3Atrue%7D%2C%22APP%22%3A%7B%22locale%22%3A%22en_US%22%2C%22rumConfig%22%3A%7B%22pageKeyPrefix%22%3A%22d_%22%2C%22beacon-service%22%3A%22tracking%22%2C%22beacon-url%22%3A%22%2Fli%2Ftrack%22%2C%22event-name%22%3A%22RealUserMonitoringEvent%22%2C%22enable-cdn-tracking%22%3Atrue%2C%22enable-pop-tracking%22%3Atrue%2C%22user-timing-mark-enabled%22%3Atrue%2C%22web-vitals-enabled%22%3Atrue%2C%22enable-memory-measurement%22%3Atrue%7D%2C%22name%22%3A%22voyager-web%22%2C%22version%22%3A%220.0.0-productspec%2Bf4894b9e%22%7D%2C%22contentSecurityPolicy%22%3A%7B%22default-src%22%3A%22%5C%22none%5C%22%20*.licdn.com%20*.licdn-ei.com%22%2C%22script-src%22%3A%22%5C%22self%5C%22%20%5C%22unsafe-inline%5C%22%20*.licdn.com%20*.licdn-ei.com%20*.linkedin.com%22%2C%22font-src%22%3A%22%5C%22self%5C%22%20*.licdn.com%20*.licdn-ei.com%20*.slidesharecdn.com%22%2C%22frame-src%22%3A%22*.youtube.com%20*.youtube-nocookie.com%20*.slideshare.net%22%2C%22connect-src%22%3A%22%5C%22self%5C%22%20localhost%3A*%20*.linkedin.com%22%2C%22img-src%22%3A%22%5C%22self%5C%22%20*.slidesharecdn.com%20*.licdn.com%20*.licdn-ei.com%20spdy.linkedin.com%20spdy.linkedin-ei.com%20*.youtube.com%20*.youtube-nocookie.com%22%2C%22style-src%22%3A%22%5C%22self%5C%22%20%5C%22unsafe-inline%5C%22%20*.licdn.com%20*.licdn-ei.com%22%2C%22media-src%22%3A%22%5C%22self%5C%22%20*.slidesharecdn.com%20*.licdn.com%20*.licdn-ei.com%22%7D%2C%22tracking%22%3A%7B%22validation%22%3A%7B%22throwOnError%22%3Atrue%7D%2C%22appId%22%3A%22com.linkedin.flagship3.d_web%22%2C%22pageKeyPrefix%22%3A%22d_%22%2C%22pveTrackingInfo%22%3A%7B%22osName%22%3A%22phone_web%22%7D%2C%22heartbeat%22%3A%7B%22enabled%22%3Atrue%7D%2C%22impression%22%3A%7B%22timeThreshold%22%3A300%2C%22percentageThreshold%22%3A50%2C%22viewportOffset%22%3A%7B%22top%22%3A52%2C%22bottom%22%3A0%2C%22left%22%3A0%2C%22right%22%3A0%7D%7D%2C%22externalTracking%22%3A%7B%22enabled%22%3Atrue%7D%2C%22retryConfig%22%3A%7B%22inMemory%22%3A%7B%22attemptLimit%22%3A4%2C%22statusCodes%22%3A%5B502%2C504%5D%7D%2C%22persist%22%3A%7B%22attemptLimit%22%3A3%2C%22statusCodes%22%3A%5B401%2C403%2C404%2C405%2C406%2C407%2C408%2C409%2C413%2C429%2C431%2C500%2C501%2C502%2C503%2C504%2C505%2C506%2C507%2C508%2C509%2C510%2C511%5D%2C%22maxNumber%22%3A1000%2C%22batchEvictionNumber%22%3A300%2C%22throttleWait%22%3A300000%7D%7D%2C%22clientMonitoringConfig%22%3A%7B%7D%2C%22disableCompression%22%3Afalse%7D%2C%22enableComponentUsageReport%22%3Afalse%2C%22enableEngines%22%3Atrue%2C%22tagManager%22%3A%7B%22profileName%22%3A%22voyager-web-global%22%2C%22disableTrackingEventsListenerForGlobalProfile%22%3Atrue%2C%22ignoreRouteList%22%3A%5B%22authentication.index%22%2C%22authentication.loading%22%5D%7D%2C%22themeTesting%22%3A%7B%22dark%22%3A%7B%22label%22%3A%22Dark%22%2C%22themeClass%22%3A%22theme--dark%22%2C%22themeSelector%22%3A%22%23ui-theme-dark%22%7D%7D%2C%22enableBackstop%22%3Afalse%2C%22exportApplicationGlobal%22%3Afalse%2C%22ember-faker%22%3A%7B%7D%2C%22sw%22%3A%7B%22devEnabled%22%3Afalse%2C%22vitalsEndpoint%22%3A%22%2Fvoyager%2Fsw%2Fvitals%22%7D%2C%22sparkPlaceholders%22%3A%7B%22includeHashes%22%3A%5B%22assets%2Fmedia-player.amd.js%22%5D%7D%2C%22appVersion%22%3A%220.0.0-productspec%22%2C%22artdeco%22%3A%7B%7D%7D"
        /> */}
      </Head>
      <Container>
        <Navbar />
        <SideMenu />
        <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
    </>
  );
};
