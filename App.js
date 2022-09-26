/**
 * @format
 * @flow strict-local
 */

import type { Node } from "react";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AppLayout from "./src/components/app-layout";
import { default as theme } from "./src/assets/theme/rc-theme.json";
import { default as mapping } from "./src/assets/theme/mapping.json";

const App: () => Node = () => {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        customMapping={mapping}
        theme={{ ...eva.light, ...theme }}>
        <AppLayout />
      </ApplicationProvider>
    </React.Fragment>
  );
};

export default App;
