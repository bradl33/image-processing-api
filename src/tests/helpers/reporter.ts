import {DisplayProcessor, SpecReporter, StacktraceOption} from 
  'jasmine-spec-reporter';
  import SuiteInfo = jasmine.SuiteInfo;
  // import JasmineStartedInfo = jasmine.JasmineStartedInfo;
  
  class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(info: SuiteInfo, log: string): string {
      return `TypeScript ${log}`;
    }
  }
  
  jasmine.getEnv().clearReporters();
  jasmine.getEnv().addReporter(
    new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY,
        displaySuccessful: true
      },
      summary: {
        displaySuccessful: true
      },
      customProcessors: [CustomProcessor],
    })
  );
  