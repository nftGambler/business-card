import React from "react";
import EMAIL from "./components/email-button";
import FRONTEND from "./components/frontend_dev";
import Linked from "./components/linked_in_button";
import MAIN_BODY from "./components/main_body";
import Name from "./components/Name";
import Image from "./components/profile_image";
import Website from "./components/website";
import About from "./components/about";
import ABOUT_TEXT from "./components/about_text";
import Interests from "./components/interests";
import INTEREST_INFO from "./components/interests_info";
import ICON_BACKGROUND from "./components/icon-background";
import TWITTER_ICON from "./components/twitter_icon";
import FACEBOOK_ICON from "./components/facebook_icon";
import IG_ICON from "./components/ig_icon";
import GITHUB_ICON from "./components/gitHub_icon";


const App = () => {
  return (
    <div className="ALL_COMPONENTS">
      <Image />
      <MAIN_BODY />
      <FRONTEND />
      <Name />
      <Website />
      <EMAIL />
      <Linked />
      <About />
      <ABOUT_TEXT />
      <Interests />
      <INTEREST_INFO />
      <ICON_BACKGROUND />
      <TWITTER_ICON />
      <FACEBOOK_ICON />
      <IG_ICON />
      <GITHUB_ICON />

    </div>
  )
}

export default App