# Improvements

Since this is not to be regarded as a complete solution, below I will compile a list of possible UI improvements and tweaks for a more user-oriented experience.

## Icons
Many icons are still missing, for instance icons for user actions like search or sorting or arrows indicating the possibility to expand and collapse the body of the emails. These icons would make navigating the UI much easier.

## Filters
As this app should function as an archive, it goes without saying its search capabilities need to be enhanced with filters other than date range. Users most likely will want to filter by sender(s), recepient(s), subject etc. A full text search on the body could also be taken into account.

## Single Email View
Users may want to completely focus on content and possible actions on one single email, possibly even more so than checking two emails at the same time. If the email could not only be expanded in the same table view as now, but also be opened on its own path, that would help the user not to get distracted by the clutter caused by the other emails' details.

## Pagination
I did not implement a pagination to keep the scope of the test limited. However, I think this is an important element to every interface of this kind. In the mobile view, the pagination could be replaced by infinite scrolling.

## Datepickers
The mockup suggested only one date picker should be used for the date range, but I created two because the user may not benefit from a bi-monthly or yearly view of the date picker. Search of archives may be performed on a timespan covering several years and I thought keeping to isolated calendars for the start and end date would be a more straighforward approach to this problem.
This interface could be further improved by limiting the possibility of human errors. For instance, putting some rules in place (start date needs to preceed end date and viceversa) and disabling the invalid selections or showing feedback about selection errors would be beneficial.
