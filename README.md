# NgxUtility

Angular utility modules

## Modules

- [@ngx-utility/core](projects/core)
- [@ngx-utility/files](projects/files)
- [@ngx-utility/dates](projects/dates)

## Development

### Docs preview

```shell script
npm run start
``` 

### Build modules

```shell script
npm run build:lib
``` 

### Release new version

Release new patch version
```shell script
npm run release
```

Release new major version
```shell script
npm run release:major
```

### Publish released version

1. checkout tag or master
2. build library `npm run build:lib`
3. publish each module
    1. `npm run publish:core`
    2. `npm run publish:files`
    3. `npm run publish:dates`

## License

This project is released under the MIT license, which can be found in [`LICENSE`](LICENSE).
