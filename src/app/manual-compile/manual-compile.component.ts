import {AfterViewInit, Compiler, CompilerFactory, Component, NgModule, ViewChild, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';
 
@Component({
    selector: 'app-manual-compile',
    template: '<p>Manual-Component</p><div #container></div>'
})
export class ManualCompileComponent implements AfterViewInit {
    @ViewChild('container', {read: ViewContainerRef, static: true}) container: ViewContainerRef;
    constructor(private compiler: Compiler) {}
 
    ngAfterViewInit() {
        console.log("ngAfterViewInit Invoked")
        // Must clear cache.
        this.compiler.clearCache();
 
        // Define the component using Component decorator.
        const component = Component({
            template: '<div>This is the dynamic template</div>',
            styles: [':host {color: red}']
        })(class {});
 
        // Define the module using NgModule decorator.
        const module = NgModule({
            declarations: [component]
        })(class {});
 
        // Asynchronously (recommended) compile the module and the component.
        this.compiler.compileModuleAndAllComponentsAsync(module)
            .then(factories => {
                // Get the component factory.
                const componentFactory = factories.componentFactories[0];
                // Create the component and add to the view.
                // DOES NOT WORK
                //const componentRef = this.container.createComponent(componentFactory);
            });
    }
}