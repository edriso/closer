# Islamic guidelines

Closer is a halal space for Muslim couples. This page is the content policy every question, game
prompt, activity and UI string follows. It sits next to the [content guide](CONTENT_GUIDE.md),
which covers voice and language.

Closer follows the cautious, mainstream Sunni view. Where scholars differ, it leaves the item out:
a smaller set of clean questions beats a bigger set with doubtful ones. **When in doubt, leave it
out.** This is a content policy written by the maintainers, not a fatwa. For a ruling on your own
situation, ask a qualified scholar you trust.

## Who each section is for

| Section                                                    | For                                                                                                                   | What that means                                                                                                                                                                                           |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Talk**, **Play**, **Moments**, **The closeness journey** | Married couples (spouses), including a couple whose nikah (katb al-kitab) is done and who are waiting for the wedding | Warm and affectionate is welcome. Intimate is never on screen.                                                                                                                                            |
| **Discover** (all topics except the Journey)               | Spouses, **and** two people seriously considering marriage                                                            | Must suit two non-mahram people talking for marriage, in a proper setting with their families' knowledge and no khalwa: practical, respectful, no romance, no flirting, nothing physical, no confessions. |

It's fine to assume the couple is Muslim. Don't assume children, wealth, living parents or good
health: infertility, loss and illness are real, and a question should never sting.

## Not in Closer

Never on a card, a follow-up, a game, an activity step or in UI copy:

1. **Birthdays** and anything celebrating one: parties, cakes, birthday gifts, wishes or surprises.
   The same goes for other annual festivals besides Eid al-Fitr and Eid al-Adha: Valentine's Day,
   Mother's Day, New Year, Christmas, Halloween, and anniversary parties. Remembering the day of
   the nikah or the wedding as a memory is fine; turning it into a yearly celebration is not.
2. **Music**: songs, singing, playlists, instruments, concerts, karaoke, "our song" and dancing.
   Quran recitation, poetry, a voice note or the sounds of nature work instead.
3. **Lying, even as a joke**: "lie", "bluff", made-up facts, pranks that trick or scare. That's why
   the game is _Two truths and a wish_: the player names things as short phrases, never "I did...",
   so nobody states anything untrue.
4. **Gambling and wagers**: bets, stakes, lotteries, prize draws, dice, cards and backgammon. Games
   keep score lightly and nothing is won or lost.
5. **Fortune-telling and superstition**: zodiac and star signs, horoscopes, palm reading, luck and
   lucky charms, wishing on stars, coins or candles, genies, magic and spells.
6. **Relationships before marriage and past sins**: exes, past relationships, crushes, first love,
   celebrity crushes, and anything asking someone to confess a past sin, reveal "a secret" or "the
   worst thing you've done". Islam asks people to keep their own past sins covered (sitr), even
   from a spouse or a fiance.
7. **Intimate content**: anything sexual, kissing, bedroom talk, physical "romance challenges".
   What happens between spouses stays private. Plain affection (a kind word, a hug mentioned
   simply, holding hands) can appear in spouse-only sections, never in Discover.
8. **Immodesty**: swimwear, mixed beaches, pools or gyms, revealing fashion, photos or videos of
   other people, and dressing up as the opposite gender, even in fun.
9. **Intoxicants and haram food**: alcohol, bars, smoking, shisha, vaping, pork. Food and
   restaurants are assumed halal.
10. **Movies, series and cinema**: no movie nights, binge-watching or cinema dates. A walk, a book,
    cooking, a beneficial talk or a nature documentary instead.
11. **Backbiting and mockery**: no prompts that invite complaints about specific people (in-laws,
    friends, relatives), no roasting, no impressions that mock someone, no laughing at looks or
    flaws. Teasing between spouses stays kind.
12. **Disrespect to the religion and guessing the unseen**: no jokes about Allah, the prophets,
    angels, the Quran or the jinn; no "if you were God" or "if you could change one rule"; no
    "how do you think you'll die". Reflecting on death and the hereafter with hope is good.
13. **Images of living beings**: no drawing each other's portraits or faces, statues or dolls.
    Photos of places, food and nature are fine.
14. **Dogs as pets** (cats, birds and fish are fine), and **mixed-gender socialising**: double
    dates, mixed parties, close friends of the opposite gender.
15. **Riba and haram money**: interest-bearing loans, mortgages or credit-card debt treated as
    normal. Money questions can talk about halal income, saving, zakat, sadaqah and staying out of
    debt.
16. **Extravagance and showing off**: luxury flexing, costly surprises, comparing ourselves with
    other couples on social media.
17. Disrespect to parents, cursing and swearing oaths lightly.

## Welcome

Praying together, the Quran, du'a and dhikr, sadaqah, Ramadan and Eid, dreams of Hajj and Umrah,
visiting family (silat al-rahim), hospitality, gratitude (shukr) and patience (sabr), good
character, the Prophet's ﷺ kindness at home (he raced Aisha and helped with the housework),
halal recreation (walks, nature, picnics, cooking, reading, poetry, travel, horse riding, archery,
learning a skill together), halal earning, a simple and blessed wedding, and the mercy and
affection Allah placed between spouses (mawaddah wa rahmah).

Faith content stays gentle and inviting. It never preaches, judges or guilts, never tests anyone's
faith, and never asks anyone to rate their own religiosity.

## Writing about the religion

- Write "Allah" in English too, never "God". Write "النبي ﷺ" in Arabic and "the Prophet ﷺ" in English.
- Don't quote hadith numbers or state rulings on a card. A card starts a conversation; it isn't a
  lesson.
- Use plain, common terms: صلاة، دعاء، صدقة، رمضان، العيد، العمرة.

## How it's enforced

- `src/content/content.test.ts` fails on a list of off-limits words in both languages (`birthday`,
  `music`, `lie`, `ميلاد`, `موسيق`, `كذب`, …). A word list can't judge meaning, so it only catches
  the obvious slips. Every content change still gets read against this page.
- Reviewers check new content against this list before it merges. If something keeps nagging,
  leave it out.

## Sources

Background reading behind the list above, from trusted sites. Most links are IslamQA, which takes a
stricter line on some topics; where a well-known body differs (photography, for example) it's noted.
Closer takes the cautious side either way.

| Topic                               | Source                                                                                                                                                                                                                                                                                                |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Birthdays                           | IslamQA, [Do Muslims celebrate birthdays?](https://islamqa.info/en/answers/1027)                                                                                                                                                                                                                      |
| Wedding anniversaries               | IslamQA, [Celebrating wedding anniversaries](https://islamqa.info/en/answers/46665)                                                                                                                                                                                                                   |
| Valentine's Day and other festivals | IslamQA, [Ruling on celebrating Valentine's Day](https://islamqa.info/en/answers/73007)                                                                                                                                                                                                               |
| Lying as a joke                     | IslamQA, [No harm in joking as long as it is truthful](https://islamqa.info/en/answers/4893); [Conditions of joking in Islam](https://islamqa.info/en/answers/22170)                                                                                                                                  |
| Music                               | IslamQA, [Is music haram?](https://islamqa.info/en/answers/5000)                                                                                                                                                                                                                                      |
| Horoscopes, stars and luck          | IslamQA, [Ruling on horoscopes](https://islamqa.info/en/answers/2538); [Saying "it's because of a lucky star"](https://islamqa.info/en/answers/158980)                                                                                                                                                |
| Keeping past sins covered           | IslamQA, [Must a spouse be told of past sins?](https://islamqa.info/en/answers/34); Sahih al-Bukhari on [those who expose their own sins](https://sunnah.com/bukhari:6069)                                                                                                                            |
| Talking during the engagement       | IslamQA, [Talking to a fiance before marriage](https://islamqa.info/en/answers/13704); [Seeing a prospective spouse, and khalwa](https://islamqa.info/en/answers/2572)                                                                                                                                |
| Keeping intimate matters private    | IslamQA, [Disclosing secrets](https://islamqa.info/en/answers/27190)                                                                                                                                                                                                                                  |
| Backbiting and mockery              | IslamQA, [Backbiting and its expiation](https://islamqa.info/en/answers/23328)                                                                                                                                                                                                                        |
| Wagers in games                     | IslamQA, [Contests and challenges between people](https://islamqa.info/en/answers/335185)                                                                                                                                                                                                             |
| Drawing living beings, photos       | IslamQA, [Drawing animate beings](https://islamqa.info/en/answers/39806); Dar al-Ifta al-Misriyyah takes a lenient view of [camera pictures](https://www.dar-alifta.org/en/fatwa/details/5993/what-is-the-ruling-on-tv-photos-and-camera-pictures)                                                    |
| Dogs                                | IslamQA, [Keeping dogs](https://islamqa.info/en/answers/69840)                                                                                                                                                                                                                                        |
| Movies and series                   | IslamQA, [Watching movies and soap operas](https://islamqa.info/en/answers/125535)                                                                                                                                                                                                                    |
| Play between spouses                | IslamQA, [Playing with one's spouse](https://islamqa.info/en/answers/152936); Islamweb, [When did you last race your wife?](https://www.islamweb.net/en/article/149385/when-was-the-last-time-you-raced-your-wife); Sunan Abi Dawud on [the Prophet ﷺ racing Aisha](https://sunnah.com/abudawud:2578) |
| Premarital topics                   | The FYI, [Premarital questionnaire](https://thefyi.org/the-fyis-premarital-questionnaire/) and [What should you discuss before marriage?](https://thefyi.org/?p=6472)                                                                                                                                 |
