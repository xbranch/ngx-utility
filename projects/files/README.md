# Files Utils Module

## Installation

```shell script
npm install --save @ngx-utility/files
```

## Setup

```typescript
@NgModule({
  imports: [
    BrowserModule,
    UtilityFilesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

### Bytes Pipe

```angular2html
<span>{{1024|bytes}}</span>
```

### Other pipes

See documentation: [https://xbranch.github.io/ngx-utility/#/files](https://xbranch.github.io/ngx-utility/#/files)
