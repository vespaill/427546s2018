/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Circle.js:
*******************************************************************************/

class Circle {

    constructor(center, radius) {

        this.center = center;
        this.radius = radius;

    }

    draw(color) {

        var x = this.radius;
        var y = 0;
        var midpoint = 1 - this.radius;

        while (x > y) {

            y++;    // Going South

            if (midpoint <= 0) {    // Mid-point is inside or on the perimeter

                midpoint = midpoint + 2*y + 1;

            } else {    // Mid-point is outside the perimeter

                x--;    // Going South-East
                midpoint = midpoint + 2*y - 2*x + 1;

            }

            if (x < y)  // All the perimeter points have already been printed
                break;

            new Point(x + this.center.x, y + this.center.y).draw('white');

            // Print reflections in the other octants
            new Point(-x + this.center.x, y + this.center.y).draw('white');
            new Point(x + this.center.x, -y + this.center.y).draw('white');
            new Point(-x + this.center.x, -y + this.center.y).draw('white');

            /* If the generated point is on the line x = y then the perimeter
             * points have already been printed */
            if (x != y) {
                new Point(y + this.center.x, x + this.center.y).draw('white');
                new Point(-y + this.center.x, x + this.center.y).draw('white');
                new Point(y + this.center.x, -x + this.center.y).draw('white');
                new Point(-y + this.center.x, -x + this.center.y).draw('white');
            }

        }

    }

}
