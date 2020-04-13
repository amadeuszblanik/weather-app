//
//  forEachObject.ts
//
//  Created by Amadeusz Blanik on 09/12/2019.
//  Copyright © 2019 Amadeusz Blanik. All rights reserved.
//

export const forEachObject = (objects: { [key: string]: any }, action: (key: any, value: any) => void) => {
  for (const [key, value] of Object.entries(objects)) {
    action(key, value);
  }
};
