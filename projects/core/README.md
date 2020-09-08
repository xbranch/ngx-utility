# Core Utils Module

## Installation

```shell script
npm install --save @ngx-utility/core
```

## Setup

```typescript
@NgModule({
  imports: [
    BrowserModule,
    UtilityCoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

### Empty Pipe

```angular2html
<span>{{null|empty}}</span>
```

### Other pipes

See documentation: [https://xbranch.github.io/ngx-utility/#/core](https://xbranch.github.io/ngx-utility/#/core)
