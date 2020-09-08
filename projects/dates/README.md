# Date Utils Module

## Installation

```shell script
npm install --save @ngx-utility/dates moment
```

## Setup

```typescript
@NgModule({
  imports: [
    BrowserModule,
    UtilityDatesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

### FromNow Pipe

```angular2html
<span>{{yesterday|fromNow}}</span>
```

### Other pipes

See documentation: [https://xbranch.github.io/ngx-utility/#/dates](https://xbranch.github.io/ngx-utility/#/dates)
