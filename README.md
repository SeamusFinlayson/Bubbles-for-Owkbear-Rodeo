# Stat Bubbles Extension for Owlbear Rodeo

Track hit points and armor class with Roll20 style bubbles using this [Owlbear Rodeo](https://www.owlbear.rodeo/) extension.

![image](https://github.com/SeamusFinlayson/Bubbles-for-Owlbear-Rodeo/assets/77430559/c5d0c62b-c022-41a0-b43b-8bd87d4a1dc0)

## Installing

Visit the [Owlbear Rodeo store](https://extensions.owlbear.rodeo/bubble-tracker) to install the extension.

### How to use

### Basic

**Right click** on a token to access the **context menu embed** to edit a token's stats.

![image](https://github.com/SeamusFinlayson/Bubbles-for-Owlbear-Rodeo/assets/77430559/08ab4d9f-7ce5-4536-8774-73c84f0730a7)


**This extension does math for you!** 
To add 6 to your HP type +6 and press Enter. To subtract 6 from your HP type -6 and press Enter. This works for every stat.

![Context menu embed](https://github.com/SeamusFinlayson/Bubbles-for-Owlbear-Rodeo/assets/77430559/a71cf43d-b9db-46e8-9b9d-5eff77069491)

In a hurry? press **Tab** to cycle through the bubbles.

This extension works with tokens on the **Prop**, **Mount**, and **Character** layers.

The health bar is **created automatically** if a number greater than 0 is in the max health field. The temporary HP and armor class bubbles work the same way.

### For GMs

Use the **hide switch** to hide the monster stats from your players. 

The hide switch:

* Hides the health bar from players.
* Removes the context menu icon for the players.
* Turns the health bar background black to indicate that it is hidden.

Players don't get access to the hide switch. This is what they see when editing their character:

![image](https://github.com/SeamusFinlayson/Bubbles-for-Owlbear-Rodeo/assets/77430559/17693b55-3758-4455-b9a8-c720054f7229)

The **settings** menu allows GMs (but not players) to customize the extension to better fit their use case.


![image](https://github.com/SeamusFinlayson/Bubbles-for-Owlbear-Rodeo/assets/77430559/1b0df2f5-f51f-43de-b156-4c27ba79d75e)

|Menu Item|Description|
|---|---|
| ? | View these instructions in a new tab |
| Vertical offset | Move all tokens' stats up and down to accommodate name tags or other extensions. |
| Origin above token | Move all tokens' stats above them. |
| Show monster health bars to players | Show just the health bar of hidden tokens to players. |
| Monster health bar segments | When *Show monster health bars to players* is enabled the GM has the option to show a less granular version of the monsters' health to players.   For example: say you only want to show when a monster drops to half health, write 2 in this field. |
| Name tags (beta) | This feature (which is still in development) adds a custom implementation of name tags to Owlbear Rodeo that will never overlap with a token's health bar.|
| Create debug report | If your having problems with this extension and contact me for support I may ask you to use this. Otherwise, don't worry about it. |

## Building

This project uses [Yarn](https://yarnpkg.com/) as a package manager.

To install all the dependencies run:

`yarn`

To run in a development mode run:

`yarn dev`

To make a production build run:

`yarn build`

## License

GNU GPLv3

## Contributing

Copyright (C) 2023 Owlbear Rodeo

Copyright (C) 2023 Seamus Finlayson

I may accept feature requests, feel free to fork this but if you post it to the store please do not use my extension name or logo.
