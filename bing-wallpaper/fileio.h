#ifndef FILEIO_H
#define FILEIO_H

#include <QObject>
#include <QNetworkAccessManager>
#include <QDir>
#include <QJSValue>

class FileIO : public QObject
{
    Q_OBJECT
public:
    explicit FileIO(QObject *parent = nullptr);
    ~FileIO();

    void saveFile(QNetworkReply* reply);

signals:

public slots:
    void download(QString url, QString title, QJSValue callback);

private:
    QNetworkAccessManager *manager;
    QString title;
    QJSValue callback;
};

#endif // FILEIO_H
