/**
 * Your Copyright Here
 *
 * Appcelerator Titanium is Copyright (c) 2009-2010 by Appcelerator, Inc.
 * and licensed under the Apache Public License (version 2)
 */
#import "ComCclaffertyKeyboardViewSetterModule.h"
#import "TiBase.h"
#import "TiHost.h"
#import "TiUtils.h"
#import "TiUITextWidgetProxy.h"

@implementation ComCclaffertyKeyboardViewSetterModule

#pragma mark Internal

// this is generated for your module, please do not change it
-(id)moduleGUID
{
	return @"bb4fe16b-4a43-48fa-a505-955050ab801f";
}

// this is generated for your module, please do not change it
-(NSString*)moduleId
{
	return @"com.cclafferty.keyboardViewSetter";
}

#pragma mark Lifecycle

-(void)startup
{
	// this method is called when the module is first loaded
	// you *must* call the superclass
	[super startup];
	
	NSLog(@"[INFO] %@ loaded",self);
}

-(void)shutdown:(id)sender
{
	// this method is called when the module is being unloaded
	// typically this is during shutdown. make sure you don't do too
	// much processing here or the app will be quit forceably
	
	// you *must* call the superclass
	[super shutdown:sender];
}

#pragma mark Cleanup 

-(void)dealloc
{
	// release any resources that have been retained by the module
	[super dealloc];
}

#pragma mark Internal Memory Management

-(void)didReceiveMemoryWarning:(NSNotification*)notification
{
	// optionally release any resources that can be dynamically
	// reloaded once memory is available - such as caches
	[super didReceiveMemoryWarning:notification];
}

#pragma mark Listener Notifications

-(void)_listenerAdded:(NSString *)type count:(int)count
{
	if (count == 1 && [type isEqualToString:@"my_event"])
	{
		// the first (of potentially many) listener is being added 
		// for event named 'my_event'
	}
}

-(void)_listenerRemoved:(NSString *)type count:(int)count
{
	if (count == 0 && [type isEqualToString:@"my_event"])
	{
		// the last listener called for event named 'my_event' has
		// been removed, we can optionally clean up any resources
		// since no body is listening at this point for that event
	}
}

#pragma Public APIs

-(void)set:(id)args
{
    // Require two argyments
    if ([args count] == 2) {
        
        // provideInputView(textField, inputView)
        id textWidgetProxy = [args objectAtIndex:0];
        id inputViewProxy = [args objectAtIndex:1];
        
        // Only work with TiUITextWidgets
        if ([textWidgetProxy isKindOfClass:[TiUITextWidgetProxy class]]) {
            
            // Work on main thread as we utilise UIKit
            TiThreadPerformOnMainThread(^{
                id textWidget = [textWidgetProxy view];
                id inputView = nil;
                
                // Set inputView to our view passed as a parameter
                if ([inputViewProxy isKindOfClass:[TiViewProxy class]]) {
                    inputView = (UIView *)[inputViewProxy view];
                }
                
                // Set the inputView to our parameter or nil
                [(id)[textWidget textWidgetView] setInputView:inputView];
            }, YES);
        }
    }
}

-(id)exampleProp
{
	// example property getter
	return @"hello world";
}

-(void)setExampleProp:(id)value
{
	// example property setter
}

@end
