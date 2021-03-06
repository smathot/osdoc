<div class="ClassDoc YAMLDoc" id="clock" markdown="1">

# instance __clock__

The `clock` object offers basic time functions. A `clock` object is
created automatically when the experiment starts.

__Example__:

~~~ .python
# Get the timestamp before and after sleeping for 1000 ms
t0 = clock.time()
clock.sleep(1000)
t1 = clock.time()
time_passed = t1 - t0
print(u'This should be 1000: %s' % time_passed)
~~~

[TOC]

<div class="FunctionDoc YAMLDoc" id="clock-loop_for" markdown="1">

## function __clock\.loop\_for__\(ms, throttle=None, t0=None\)

*New in v3.2.0*

An iterator that loops for a fixed time.

__Example:__

~~~ .python
for ms in clock.loop_for(100, throttle=10):
        print(ms)
~~~

__Arguments:__

- `ms` -- The number of milliseconds to loop for.
	- Type: int. float

__Keywords:__

- `throttle` -- A period to sleep for in between each iteration.
	- Type: NoneType, float, int
	- Default: None
- `t0` -- A starting time. If `None`, the starting time is the moment at which the iteration starts.
	- Type: NoneType, float, int
	- Default: None

__Returns:__

An Iterator over times in milliseconds that have passed since `t0`.

</div>

<div class="FunctionDoc YAMLDoc" id="clock-once_in_a_while" markdown="1">

## function __clock\.once\_in\_a\_while__\(ms=1000\)

*New in v3.2.0*

Periodically returns `True`. This is mostly useful for executing
code (e.g. within a `for` loop) that should only be executed once
in a while.

__Example:__

~~~ .python
for i in range(1000000):
        if clock.once_in_a_while(ms=50):
                # Execute this code only once every 50 ms
                print(clock.time())
~~~

__Keywords:__

- `ms` -- The minimum waiting period.
	- Type: int, float
	- Default: 1000

__Returns:__

`True` after (at least) the minimum waiting period has
passed since the last call to `Clock.once_in_a_while()`, or
`False` otherwise.

- Type: bool

</div>

<div class="FunctionDoc YAMLDoc" id="clock-sleep" markdown="1">

## function __clock\.sleep__\(ms\)

Sleeps (pauses) for a period.

__Example:__

~~~ .python
# Create two canvas objects ...
my_canvas1 = Canvas()
my_canvas1.text(u'1')
my_canvas2 = Canvas()
my_canvas2.text(u'2')
# ... and show them with 1 s in between
my_canvas1.show()
clock.sleep(1000)
my_canvas2.show()
~~~

__Arguments:__

- `ms` -- The number of milliseconds to sleep for.
	- Type: int, float

</div>

<div class="FunctionDoc YAMLDoc" id="clock-time" markdown="1">

## function __clock\.time__\(\)

Gives a current timestamp in milliseconds. The absolute meaning of the timestamp (i.e. when it was 0) depends on the backend.

__Example:__

~~~ .python
t = clock.time()
print(u'The current time is %f' % t)
~~~

__Returns:__

A timestamp.

- Type: float

</div>

</div>

