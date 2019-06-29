import { NgModule, CompilerFactory, COMPILER_OPTIONS, Compiler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { ManualCompileComponent } from './manual-compile.component';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [ManualCompileComponent],
  imports: [
    CommonModule
  ],
  providers: [
    // Compiler is not included in AOT-compiled bundle.
    // Must explicitly provide compiler to be able to compile templates at runtime.
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}    ],
  exports: [ManualCompileComponent]
})
export class ManualCompileModule { }
