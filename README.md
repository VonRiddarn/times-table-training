# Times table trainer 🧠 📃
The simple web page that allows you to train your math skills!<br/>
*This is currently a work in progress and will see many changes - this readme included.*

## Planned features
* Specific table training - Lock var A
* Sprint - 1 through 12, No repeats
* Exam - X questions, no repeats, weighted towards the center of the grid
* Endless mode (this is the one implemented)
* Diagnostic - see what you need to train
* Localizer for SE and EN(us)

## TODO:

*Keeping the todo in the README centralizes information and promotes transparency.*

### Tidy up main.ts 
At this stage separation of concerns is not adhered and
it server more or less as a proof of concept rather than anything else.

### Add localizer for SE / EN
Make something like "localizedString" that requires an ID
When using said string it will automatically query the localizer the string related to its ID
The localizer will return an apropriate string depending on the currently selected language.